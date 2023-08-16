export const socialMediaQuery = `query SocialIcons {
    acfOptionsHeader {
        headerSocials {
            socialMedia {
                socialUrl
                socialIcon {
                    altText
                    sourceUrl
                }
            }
        }
    }
}`,
    generalInfoQuery = `query GeneralInfo {
    generalSettings {
      title
      description
    }
    siteLogo {
      sourceUrl
    }
}`;
