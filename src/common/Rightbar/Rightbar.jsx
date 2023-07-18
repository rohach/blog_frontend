import React from 'react';
import './rightbar_style.css';
import notebook from '../../assets/images/notebook.png';
import me from '../../assets/images/me.jpg';
import profile from '../../assets/images/profile.avif';

const index = () => {
  return (
    <div className="rightbar_inner">
      {/* First Box */}
      <div className="rightbar_box">
        <div className="rightbar_box_left">
          <h2>Get unlimited access to everything on Reader</h2>
          <p> Plans starting at less than $1/week.</p>
          <button>Get unlimited access</button>
        </div>
        <div className="rightbar_box_right">
          <img src={notebook} alt="notebook" style={{ width: '60%' }} />
        </div>
      </div>
      {/* Second Part */}
      <section>
        <div className="poeples">
          <h2>People you might be interested</h2>
          <div className="people_inner">
            <div className="profile_img">
              <img src={me} alt="user" />
            </div>
            <div className="profile_desc">
              <h3>Rohan Chaulagain</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="profile_follow">
              <button>Follow</button>
            </div>
          </div>
          <div className="people_inner">
            <div className="profile_img">
              <img src={me} alt="user" />
            </div>
            <div className="profile_desc">
              <h3>Rohan Chaulagain</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="profile_follow">
              <button>Follow</button>
            </div>
          </div>
          <div className="people_inner">
            <div className="profile_img">
              <img src={me} alt="user" />
            </div>
            <div className="profile_desc">
              <h3>Rohan Chaulagain</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="profile_follow">
              <button>Follow</button>
            </div>
          </div>
        </div>
      </section>

      {/* Reading part */}
      <section>
        <div className="reading">
          <h2>My reading list</h2>
          <div className="reading_inner">
            <div className="reading_inner_img">
              <img src={profile} alt="reading_img" />
            </div>
            <div className="reading_desc">
              <h4>A Beginner's Guide to White Balance in Photography</h4>
              <p>
                Along with shutter spect aperture and ISO, white balance is one
                of the most
              </p>
              <div className="posted_by">
                <div className="posted_by_user">
                  <img src={me} alt="user" />
                </div>
                <div className="posted_by_name">
                  Rohan <span> • April 16, 2023</span>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
