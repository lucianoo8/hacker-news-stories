import axios from 'axios';

import { selectTheRows } from '../utilities/selectTheRows'
export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

// pass id to the api
 export const getStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({data}) =>data && selectTheRows(data) );

  return result;
}; 

export const getStoryIds = async () => {

  const result = await axios.get(newStoriesUrl).then(({data}) => data);

  return result;
};

