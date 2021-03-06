import React from 'react';
import { render } from 'react-dom';

import { MDXProvider } from '@mdx-js/react';

import {
  Deck,
  FlexBox,
  Slide,
  Box,
  Progress,
  FullScreen,
  Markdown,
  Notes,
  mdxComponentMap
} from 'spectacle';


// SPECTACLE_CLI_MDX_START
import slides, { notes } from './slides.mdx';
// SPECTACLE_CLI_MDX_END


// SPECTACLE_CLI_THEME_START
const theme = {
  colors: {
    // primary: '#78003d', // Warm Pink 800
    // secondary: '#009de7', // Alt Blue 500
    // backgroundColor: 'hotpink'
  },
  fonts: {
    header: 'NRK Sans',
    text: 'NRK Sans'
  }
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <MDXProvider components={mdxComponentMap}>
    <Deck loop theme={theme} template={template}>
      {slides
        .map((MDXSlide, i) => [MDXSlide, notes[i]])
        .map(([MDXSlide, MDXNote], i) => (
          <Slide key={`slide-${i}`} slideNum={i}>
          {/* <Slide key={`slide-${i}`} slideNum={i} backgroundColor='backgroundColor'> */}
            <MDXSlide />
            <Notes>
              <MDXNote />
            </Notes>
          </Slide>
        ))}
    </Deck>
  </MDXProvider>
);

render(<Presentation />, document.getElementById('root'));
