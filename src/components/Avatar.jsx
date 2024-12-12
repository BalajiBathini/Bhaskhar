// Avatar.jsx
import React from 'react';

const Avatar = ({ avatarSrc, altText }) => {
  return (
      <img src={avatarSrc} alt={altText} className="avatar" />
  );
};

export default Avatar;