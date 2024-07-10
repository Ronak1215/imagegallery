import React from "react";

const Imagescard = ({image}) => {
  const tags = image.tags.split(',');
  return (
    <div className="max-w-lg rounded shadow-md overflow-hidden">
      <img
        src={image.webformatURL}
        alt=""
        className="w-full"
      />
      <div className="px-2 py-4">
        <div className="font-bold text-2xl text-purple-500 mb-2">
          Image by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
        </ul>
      </div>
      <div className="px-5 py-7">
        {tags.map((tag,index) => <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-gray-700 font-semibold text-sm mr-2 flex-wrap">
          #{tag}
        </span>)}
      </div>
    </div>
  );
};

export default Imagescard;
