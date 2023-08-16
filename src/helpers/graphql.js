import { generalInfoQuery, socialMediaQuery } from '../graphql/queries';
import apiCall from './api';

const socialItems = await apiCall(socialMediaQuery);

const generalInfo = await apiCall(generalInfoQuery);

export const { socialMedia } = socialItems.data.acfOptionsHeader.headerSocials;
export const {
    generalSettings: { title, description },
    siteLogo: { sourceUrl },
} = generalInfo.data;
