import React from 'react';
import './articles_style.css';
import me from '../../assets/images/me.jpg';
import sample from '../../assets/images/profile.avif';

const Articles = () => {
  return (
    <div className="articles">
      <div className="articles_heading">
        <h2 style={{ fontSize: '1.2rem' }}>Articles</h2>
        <div className="select-dropdown">
          <select>
            <option value="Option 1">Following</option>
            <option value="Option 2">Unfollowing</option>
          </select>
        </div>
      </div>
      {/* Articles */}
      <div className="single_article">
        <div className="article_author">
          <div className="author">
            <img src={me} alt="author_img" />
          </div>
          <div className="about_author">
            <h2 className="author_name">
              <div>Rohan Chaulagain </div>
              <div style={{ color: 'grey', fontSize: '0.8rem' }}>
                {' '}
                • April 16, 2023
              </div>
            </h2>
            <p>
              My name is Rohan Chaulagain and I am a Full-Stack Web Developer.
            </p>
          </div>
        </div>
        {/* Article Desc */}
        <div className="article_des">
          <div className="article_desc_left">
            <h2>
              8 Psychology-Based Design hacks that will make you a better UX
              Designer
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              sit harum atque deleniti nihil dolorum delectus ipsam et beatae
              nesciunt nisi, quis temporibus vero exercitationem esse nulla fuga
              animi distinctio.
            </p>
            <div className="article_tags">
              <div className="about_article">UX design</div>
              <div className="about_article">Read more</div>
            </div>
          </div>
          <div className="article_desc_right">
            <img src={sample} alt="article_img" />
          </div>
        </div>
      </div>

      {/* Second */}
      <div className="single_article">
        <div className="article_author">
          <div className="author">
            <img src={me} alt="author_img" />
          </div>
          <div className="about_author">
            <h2 className="author_name">
              <div>Rohan Chaulagain </div>
              <div style={{ color: 'grey', fontSize: '0.8rem' }}>
                {' '}
                • April 16, 2023
              </div>
            </h2>
            <p>
              My name is Rohan Chaulagain and I am a Full-Stack Web Developer.
            </p>
          </div>
        </div>
        {/* Article Desc */}
        <div className="article_des">
          <div className="article_desc_left">
            <h2>
              8 Psychology-Based Design hacks that will make you a better UX
              Designer
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              sit harum atque deleniti nihil dolorum delectus ipsam et beatae
              nesciunt nisi, quis temporibus vero exercitationem esse nulla fuga
              animi distinctio.
            </p>
            <div className="article_tags">
              <div className="about_article">UX design</div>
              <div className="about_article">Read more</div>
            </div>
          </div>
          <div className="article_desc_right">
            <img src={sample} alt="article_img" />
          </div>
        </div>
      </div>
      {/* Third */}
      <div className="single_article">
        <div className="article_author">
          <div className="author">
            <img src={me} alt="author_img" />
          </div>
          <div className="about_author">
            <h2 className="author_name">
              <div>Rohan Chaulagain </div>
              <div style={{ color: 'grey', fontSize: '0.8rem' }}>
                {' '}
                • April 16, 2023
              </div>
            </h2>
            <p>
              My name is Rohan Chaulagain and I am a Full-Stack Web Developer.
            </p>
          </div>
        </div>
        {/* Article Desc */}
        <div className="article_des">
          <div className="article_desc_left">
            <h2>
              8 Psychology-Based Design hacks that will make you a better UX
              Designer
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              sit harum atque deleniti nihil dolorum delectus ipsam et beatae
              nesciunt nisi, quis temporibus vero exercitationem esse nulla fuga
              animi distinctio.
            </p>
            <div className="article_tags">
              <div className="about_article">UX design</div>
              <div className="about_article">Read more</div>
            </div>
          </div>
          <div className="article_desc_right">
            <img src={sample} alt="article_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
