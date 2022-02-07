import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";

const LIKE_MOVIE = gql`
  mutation likeMovie($id: Int!) {
    likeMovie(id: $id) @client
  }
`;

const Container = styled.div`
  height: 400px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  border-radius: 7px;
  background-color: transparent;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 95%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;

const Button = styled.button``;

export default ({ id, bg, isLiked }) => {
  const [likeMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: parseInt(id) },
  });
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg}></Poster>
      </Link>
      <Button onClick={isLiked ? null : likeMovie}>
        {isLiked ? "Unlike" : "Like"}
      </Button>
    </Container>
  );
};
