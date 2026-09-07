variable "cloudflare_account_id" {
    type        = string
    sensitive   = true
}

variable "lastfm_api_key" {
    description = "Secret exposto pro worker de proxy do lastfm (env.LASTFM_API_KEY)"
    type        = string
    sensitive   = true
}

variable "cloudflare_zone_id" {
    description = "maria.qa"
    type        = string
    sensitive   = true
}