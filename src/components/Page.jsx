import React from "react";

import Box from "~/Box";

const Page = ({ page, items }) => {
  return (
    <div className="Page">
      <h2 className="Page__Heading">~ ~ ~ Page{page} ~ ~ ~</h2>
      <ul className="Page__Items">
        {items.map(item => (
          <li key={item.id} className="Page__Item">
            <Box {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
