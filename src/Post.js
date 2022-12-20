import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props) {
  console.log(props);
  return (
    <>
      <article>
        <strong>{props.post.title}</strong>
        <small>{props.post.subtitle}</small>
        <br />
        Like:{props.likes}
      </article>
      <br />
    </>
  );
}

Post.PropTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.object.isRequired,
};
