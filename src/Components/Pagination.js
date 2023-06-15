import React from "react"

import Pagination from 'react-bootstrap/Pagination';

function ComPagination(){

    let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


    return(
        <div>
            <p>Pagination component page</p>
            <p>Set of presentational components fr building pagination UI</p>
            <Pagination>{items}</Pagination>
    <br />

    <Pagination size="lg">{items}</Pagination>
    <br />

    <Pagination size="sm">{items}</Pagination>
    <p>Building more complex pagination UI few convenient sub components for adding 'first', 'previous', 'next', 'last' buttons as well as 'ellipsis' item for indictating previous or continuing results</p>
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
        </div>
    )
}

export default ComPagination