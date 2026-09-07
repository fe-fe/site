locals {
  recently_played_script = "${path.module}/scripts/lastfm-recently-played-proxy.js"
}

resource "cloudflare_workers_script" "lastfm_recently_played_proxy" {
    account_id  = var.cloudflare_account_id
    script_name = "lastfm-recently-played-proxy"

    content_file = local.recently_played_script
    content_sha256 = filesha256(local.recently_played_script)
    main_module = "lastfm-recently-played-proxy.js"

    bindings = [
      {
        type = "secret_text"
        name = "LASTFM_API_KEY"
        text = var.lastfm_api_key
      }
  ]
}

resource "cloudflare_workers_route" "lastfm_recently_played_route" {
  zone_id = var.cloudflare_zone_id
  pattern = "https://api.maria.qa/lastfm/recent"
  script = "lastfm-recently-played-proxy"
}