import React from 'react';
import './blog.css';
import { Article } from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports';

// The data from the articles (this would come from a database)
const latestArticle = {imgUrl:blog01, date: "Sep 26, 2021", title: "GPT-3 and Open AI is the future. Let us explore how it is"};
const olderArticlesData = [
  {
    imgUrl: blog02,
    date: "Sep 26, 2021",
    title: "GPT-3 and Open AI is the future. Let us explore how it is"
  },
  {
    imgUrl: blog03,
    date: "Sep 26, 2021",
    title: "GPT-3 and Open AI is the future. Let us explore how it is"
  },
  {
    imgUrl: blog04,
    date: "Sep 26, 2021",
    title: "GPT-3 and Open AI is the future. Let us explore how it is"
  },
  {
    imgUrl: blog05,
    date: "Sep 26, 2021",
    title: "GPT-3 and Open AI is the future. Let us explore how it is"
  }
];

const Blog = () => {
  return (
    <div className="website__blog section__padding" id="blog">
        <div className="website__blog-heading">
          <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
        </div>
        <div className="website__blog-container">
          <div className="website__blog-container_groupLatest">
            <Article imgUrl={latestArticle.imgUrl} date={latestArticle.date} title={latestArticle.title}/>
          </div>
          <div className="website__blog-container_groupOlder">
            {/* for every object in the features data create a new feature component*/}
            {olderArticlesData.map((item, index) => (
              <Article imgUrl={item.imgUrl} date={item.date} title={item.title} key={item.title + index} />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Blog