import React, { useEffect, useState } from 'react';
import { getStoryIds} from '../services/theapi';
import { Story } from '../components/Story';
import { GlobalStyle, StoriesContainerWrapper } from "../styles/StoryContainerStyle";
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
export const StoriesContainer = () => {
    
    const { count } = useInfiniteScroll();
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));

     }, []);
      
    return(
    <>
    <GlobalStyle/>
        <StoriesContainerWrapper data-test-id="stories-container"> 
            <h1>Hacker News</h1>
            { storyIds.slice(0, count).map(storyId => (
            <Story key={storyId} storyId = {storyId} />
            ))}
      </StoriesContainerWrapper>
      </>);
};
