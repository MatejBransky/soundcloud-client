import React from 'react';
import styled from '@emotion/styled';

type Track = {
  title: string;
};

type Props = {
  tracks: Track[];
};

const Stream = ({ tracks }: Props) => {
  return (
    <Styles>
      {tracks.map((track, key) => (
        <div className="track" key={key}>
          {track.title}
          <button>click</button>
        </div>
      ))}
    </Styles>
  );
};

export default Stream;

const Styles = styled.div`
  color: white;
  background: blue;
`;
