// Import React
import React from 'react';

// Import emotion to override styles
// https://github.com/FormidableLabs/spectacle#faq
import styled from 'react-emotion';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Appear,
  Image,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
  CodePane,
  Link
} from 'spectacle';

// Import custom theme instead the default one
// import createTheme from 'spectacle/lib/themes/default';
import createTheme from '../assets/theme';

const imageFileNames = [
  // react
  'chernobyl.jpg',
  'chernobylBlurred.jpg',
  'react.svg',
  'books.png',
  'orly.png',
  'spa.jpg',
  'spaVsMpa.png',
  'virtualDom.png',
  'granularCode.png',
  'granularDomUpdates.gif',
  'propsState.png',
  'propsState2.png',
  'componentBasics1.webp',
  'componentBasics2.webp',
  'componentBasics3.webp',
  'componentBasics4.webp',
  'lifecycle.webp',
  'lifecycleExtended.webp',
  'reactDevTools.png',
  'syncState.webp',

  // redux
  'collider.webp',
  'colliderBlurred.webp',
  'fbCounterIssue.png',
  'fbCounterIssueTeam.png',
  'mvc.png',
  'flux.png',
  'redux.png',
  'reduxDevTools.png',

  // router
  'routes.webp',
  'routesBlurred.webp',
  'routerBasics1.webp',
  'routerBasics2.webp',
  'routerBasics3.webp',
  'hashRouter.png',
  'browserRouter.png',
  'browserRouterOnStatic.gif',

  // hooks
  'hooks.jpg',
  'hooksBlurred.jpg',
  'whatever.jpg',
  'devCommunity.webp',
  'wrapperHell.webp',
  'reduxKiller.webp'
];
const reqImage = name => ({ [name.split('.')[0]]: require(`../assets/${name}`) });
const images = imageFileNames.reduce((acc, name) => ({ ...acc, ...reqImage(name) }), {});

const sourceFileNames = [
  // react
  'installCRA.js',
  'jsx.js',
  'jsx2.js',
  'jsx3.js',
  'jsx4.js',
  'events.js',
  'functionComponent.js',
  'classComponent.js',
  'classComponentWithState.js',
  'setState.js',
  'setState2.js',
  'setState3.js',
  'passingProps.js',
  'fragment.js',
  'hocLifecycle.js',
  'errorBoundary.js',
  'errorBoundaryUsage.js',
  'propTypes.js',
  'reactClassProperties.js',
  'keys.js',
  'pureComponent.js',

  // redux
  'reduxPrinciples1.js',
  'reduxPrinciples2.js',
  'reduxPrinciples3.js',
  'reduxPrinciples31.js',
  'combineReducers.js',
  'actionCreators.js',
  'createStore.js',
  'reduxThunk.js',
  'reduxThunk2.js',
  'reduxThunk3.js',
  'reduxThunkSource.js',
  'reduxSaga.js',
  'reduxSaga2.js',
  'reactRedux.js',
  'reactRedux2.js',
  'reselect.js',
  'reselect2.js',
  'reselect3.js',

  // router
  'routerInstall.js',
  'routerInstallCRA.js',
  'importBrowserRouter.js',
  'importHashRouter.js',
  'defaultSPARouteExpress.js',
  'defaultSPARouteDevServer.js',
  'route.js',
  'routeInclusiveRouting.js',
  'routeInclusiveRoutingUseCase.js',
  'routerHelloWorld.js',
  'switch.js',
  'link.js',
  'navlink.js',
  'redirect.js',
  'match.js',
  'location.js',
  'history.js',
  'withRouter.js',
  'routeRenderProtectedRoute.js',
  'customMatchParams.js',
  'blockedUpdates.js',
  'connectedReactRouterState.js',
  'connectedReactRouterAction.js',
  'connectedReactRouter.js',

  // hooks
  'hoc.js',
  'hocWithRouter.js',
  'renderProps.js',
  'renderPropsChildren.js',
  'giantComponent.js',
  'useState.js',
  'useStateFunctionalUpdates.js',
  'useStateLazyInitialState.js',
  'useEffect.js',
  'useEffectConditional.js',
  'useEffectOnMount.js',
  'useEffectCleanup.js',
  'useContext.js',
  'useReducer.js',
  'useReducerInit.js',
  'useCallback.js',
  'useMemo.js',
  'customHook.js',
  'customUseFormInput.js',
  'customUseDocumentTitle.js',
  'reactReduxApiHooks.js',
  'reactRouterApiHooks.js',
];
const reqSource = name => ({ [name.split('.')[0]]: require(`../assets/code/${name}`) });
const sources = sourceFileNames.reduce((acc, name) => ({ ...acc, ...reqSource(name) }), {});

const videos = {
  separationOfConcerns: require('../assets/separationOfConcerns.mp4'),
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'black',
    secondary: 'white',
    tertiary: '#c11b01',
    quaternary: '#cecece',
    brainDark: '#c11b01',
    brainLight: '#f08920',
    blood: '#bb0a1e',
    bronze: '#cd7f32',
    asphalt: '#222f38',
    fire: '#c2261f',
    gray: '#1F2022',
    cartoon: '#006dc6',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

// Break out of the 1000x700 box
// https://github.com/FormidableLabs/spectacle/issues/500
const FullScreenSlide = styled(Slide)`
  :first-child {
    max-width: 100%;
    max-height: 100%;
    padding: ${(props) => props.padding || 0};
  }
`;

const FullScreenImage = ({
  src,
  align = 'center',
  style = {}
}) => {
  let margin;
  switch (align) {
    case 'left':
      margin = '0 auto 0 0';
      break;
    case 'right':
      margin = '0 0 0 auto';
      break;
    case 'center':
    default:
      margin = '0 auto';
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        ...style
      }}
    >
      <Image
        src={src}
        style={{
          height: '100%',
          margin
        }}
      />
    </div>
  );
};

const Corner = ({ top, right, bottom, left, children }) => (
  <div
    style={{
      position: 'absolute',
      top,
      right,
      bottom,
      left,
      textAlign: (right ? 'right' : (left ? 'left' : 'center')) // eslint-disable-line
    }}
  >
    {children}
  </div>
);

/* eslint-disable react/prop-types */
const FullScreenVideo = ({ name, format = 'webm', loop = null }) => (
  <video
    // controls
    autoPlay
    { ...(loop ? { loop: true } : {}) }
    width="100%"
    height="100%"
    style={{
      position: 'absolute',
      top: 0,
      left: 0
    }}
  >
    <source src={videos[name]} type={`video/${format}`} />
  </video>
);

const Example = ({ name }) => {
  const path = `${name[0].toLowerCase()}${name.slice(1).replace(/([A-Z])/g, '-$1').toLowerCase()}`;
  return (
    <Link href={`http://localhost:3001/${path}`} target="_blank" style={{ fontSize: '4vh' }}>{name}</Link>
  );
};

const Examples = ({ names }) => (
  <>
    <span style={{ fontSize: '4vh' }}>{names.length > 1 ? 'Examples: ' : 'Example: '}</span>
    {names.map((name, index) => (<React.Fragment key={name}>{index ? ', ' : ''}<Example name={name} /></React.Fragment>))}
  </>
);

const styles = {
  brain: {
    color: theme.screen.colors.brainDark,
  },
  brain3D: {
    color: theme.screen.colors.brainDark,
    textShadow: `${theme.screen.colors.brainLight} 0px 1px 0px,
      ${theme.screen.colors.brainLight} 0px 2px 0px,
      ${theme.screen.colors.brainLight} 0px 3px 0px,
      ${theme.screen.colors.brainLight} 0px 4px 0px`
  },
  brain3DLight: {
    color: theme.screen.colors.brainDark,
    textShadow: `${theme.screen.colors.brainLight} 0px 1px 0px,
      ${theme.screen.colors.brainLight} 0px 2px 0px,
      ${theme.screen.colors.brainLight} 0px 3px 0px`
  },
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        showFullscreenControl={false}
        controls={false}
        progress="bar"
      >

        {/** React **/}

        <FullScreenSlide bgImage={images.chernobyl}>
          <Appear transitionDuration={1000}>
            <div>
              <img src={images.react} style={{ height: '60vh' }} />
              <Heading caps style={{ ...styles.brain3D, fontSize: '21vh', lineHeight: 1.2 }}>React</Heading>
              <Heading caps style={{ ...styles.brain, fontSize: '5.1vh' }}>Oleksiy <span style={styles.brain3DLight}>Лёша</span> Dubovyk</Heading>
              {/* The Cost of Lies, The Source of Truth */}
            </div>
          </Appear>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.books}>
          <Corner bottom="5vh" left="5vw">
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>React Up & Running — Book by Stoyan Stefanov</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>The Road to Learn React — Book by Robin Wieruch</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>React in Action — Book by Mark Tielens Thomas</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>Learning React — Book by Alex Banks and Eve Porcello</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>React Quickstart Step-By-Step Guide — Book by Lionel Lopez</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>Building React Applications with Redux — Book by David Geary</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>Learn React Hooks — Book by Daniel Bugl</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>React Design Patterns and Best Practices — Book by Michele Bertoli</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>React Quickly — Book by Azat Mardan</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>React for Real — Book by Ludovico Fischer</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>React by Example — Book by Prathamesh Sonpatki</Heading>
            <Heading textColor="secondary" style={{ fontSize: '4vh', marginBottom: '2vh' }}>Pro MERN Stack — Book by Sophia Brooks</Heading>
          </Corner>
          <Corner top="5vh" right="5vw">
            <Image src={images.orly} style={{ width: '30vh', height: '30vh', }} />
          </Corner>
        </FullScreenSlide>
        <FullScreenSlide>
          <FullScreenImage src={images.whatever} />
          <Image src={images.devCommunity} style={{ position: 'absolute', width: '35vw', top: '40vh', marginLeft: '1vw', border: '1px solid black' }} />
        </FullScreenSlide>
        <FullScreenSlide>
          <BlockQuote>
            <Quote textColor="secondary" style={{ marginBottom: '3vh', fontSize: '4.5vh', lineHeight: 1.2, borderColor: theme.screen.colors.secondary }}>
            React is a JavaScript library for building user interfaces
            </Quote>
            <Cite margin="10px 0 0 30px">React Docs</Cite>
          </BlockQuote>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.spa}>
          <Appear>
            <div style={{ width: '100vw', height: '100vh', backgroundColor: 'rgba(32, 39, 33, 0.50)' }}>
              <Corner right="7vw" bottom="7vh">
                <Image src={images.spaVsMpa} style={{ height: '60vh' }} />
              </Corner>
            </div>
          </Appear>
        </FullScreenSlide>

        {/* Component Architecture */}
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 6vw">
          <Heading style={{ fontSize: '8vh', margin: 0 }}>
            Component Architecture
          </Heading>
        </FullScreenSlide>
        <FullScreenSlide bgColor="secondary">
          <FullScreenImage src={images.componentBasics1} />
        </FullScreenSlide>
        <FullScreenSlide bgColor="secondary">
          <FullScreenImage src={images.componentBasics2} />
        </FullScreenSlide>
        <FullScreenSlide bgColor="secondary">
          <FullScreenImage src={images.componentBasics3} />
        </FullScreenSlide>
        <FullScreenSlide bgColor="secondary">
          <FullScreenImage src={images.componentBasics4} />
        </FullScreenSlide>

        {/* Vitrual DOM */}
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 6vw">
          <Heading style={{ fontSize: '8vh', margin: 0 }}>
            Virtual DOM
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '4.5vh', marginTop: '2vh', textAlign: 'left' }}>
          Virtual DOM is a programming concept where an ideal, or <span style={{ ...styles.brain }}>virtual</span>, representation of a UI is kept in memory and synced with the <span style={{ ...styles.brain }}>real</span> DOM by a library such as ReactDOM. This process is called <span style={{ ...styles.brain }}>reconciliation</span>.
          </Text>
        </FullScreenSlide>
        <FullScreenSlide bgColor="secondary">
          <FullScreenImage src={images.virtualDom} />
        </FullScreenSlide>
        <FullScreenSlide bgColor="#282c34">
          <Corner top="20vh" left="10vw"><Image src={images.granularCode} style={{ width: '40vw' }} /></Corner>
          <Corner top="20vh" right="15vw"><Image src={images.granularDomUpdates} style={{ height: '60vh' }} /></Corner>
        </FullScreenSlide>

        <FullScreenSlide bgImage={images.chernobylBlurred} padding="5vh">
          <Heading style={{ fontSize: '5vh', margin: 0, textAlign: 'left' }}>
          Reconciliation
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '4vh', marginTop: '3vh', textAlign: 'left' }}>
          Algorithmic problem of generating the minimum number of operations to transform one tree into another:
          </Text>
          <List style={{ margin: '1vh 0 1vh 2vh' }}>
            <ListItem style={{ fontSize: '4vh', margin: '0.3vh' }}>Generic solutions → <span style={{ ...styles.brain }}>O(n<sup>3</sup>)</span></ListItem>
            <ListItem style={{ fontSize: '4vh', margin: '0.3vh' }}>React heuristic algorithm → <span style={{ ...styles.brain }}>O(n)</span></ListItem>
          </List>
          <Text textColor="secondary" style={{ fontSize: '4vh', marginTop: '3vh', textAlign: 'left' }}>
            <span style={{ ...styles.brain }}>React heuristic algorithm</span> is based on two assumptions:
          </Text>
          <List style={{ margin: '1vh 0 1vh 2vh' }}>
            <ListItem style={{ fontSize: '4vh', margin: '0.3vh' }}>Two elements of different types will produce different trees</ListItem>
            <ListItem style={{ fontSize: '4vh', margin: '0.3vh' }}>Developer can hint at which child elements may be stable across different renders with a <span style={{ ...styles.brain }}>key</span> prop</ListItem>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', marginTop: '5vh', textAlign: 'left' }}>
          Jumpstart:
          </Text>
          <CodePane source={sources.installCRA} style={{ maxHeight: '75vh', overflowY: 'auto' }} theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding={0}>
          <Image src={images.reactDevTools} />
        </FullScreenSlide>

        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 2vw">
          <Text textColor="secondary" style={{ fontSize: '5vh', marginTop: '5vh', textAlign: 'left' }}>
            React.createElement()
          </Text>
          <CodePane source={sources.jsx} style={{ maxHeight: '93vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 2vw">
          <Text textColor="secondary" style={{ fontSize: '5vh', marginTop: '5vh', textAlign: 'left' }}>
            JSX
          </Text>
          <CodePane source={sources.jsx2} style={{ maxHeight: '93vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 2vw">
          <Text textColor="secondary" style={{ fontSize: '5vh', marginTop: '5vh', textAlign: 'left' }}>
          React.createElement() vs JSX
          </Text>
          <CodePane source={sources.jsx3} style={{ maxHeight: '93vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 2vw">
          <Text textColor="secondary" style={{ fontSize: '5vh', marginTop: '5vh', textAlign: 'left' }}>
          React.createElement() vs JSX
          </Text>
          <CodePane source={sources.jsx4} style={{ maxHeight: '93vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 2vw">
          <Heading style={{ fontSize: '5vh', marginBottom: '3vh', textAlign: 'left' }}>
            Synthetic Events
          </Heading>
          <List style={{ margin: '1vh 0 3vh 2vh' }}>
            <ListItem style={{ fontSize: '4vh', margin: '0.3vh' }}>Cross-browser wrapper around browser native events</ListItem>
            <ListItem style={{ fontSize: '4vh', margin: '0.3vh' }}>Same interface as browser native events</ListItem>
            <ListItem style={{ fontSize: '4vh', margin: '0.3vh' }}>Use camelCase rather than lowercase</ListItem>
            <ListItem style={{ fontSize: '4vh', margin: '0.3vh' }}>In JSX you pass a function as the event handler rather than a string</ListItem>
          </List>
          <CodePane source={sources.events} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="5vh">
          <Heading style={{ fontSize: '5vh', margin: 0, textAlign: 'left' }}>
          Component Props and State
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '4vh', marginTop: '3vh', textAlign: 'left' }}>
          Props
          </Text>
          <List style={{ margin: '1vh 0 1vh 2vh' }}>
            <ListItem style={{ fontSize: '4vh', margin: '0.3vh' }}>Like parameters to functions</ListItem>
            <ListItem style={{ fontSize: '4vh', margin: '0.3vh' }}>Make component re-usable</ListItem>
            <ListItem style={{ fontSize: '4vh', margin: '0.3vh' }}>Way to pass info from parent component to child component</ListItem>
          </List>
          <Text textColor="secondary" style={{ fontSize: '4vh', marginTop: '3vh', textAlign: 'left' }}>
          State
          </Text>
          <List style={{ margin: '1vh 0 1vh 2vh' }}>
            <ListItem style={{ fontSize: '4vh', margin: '0.3vh' }}>Hold the current local state of the component</ListItem>
            <ListItem style={{ fontSize: '4vh', margin: '0.3vh' }}>Stores component-specific data</ListItem>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgColor="secondary">
          <Image src={images.propsState} />
        </FullScreenSlide>
        <FullScreenSlide bgColor="secondary">
          <Image src={images.propsState2} />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 0.5vh">
          <Heading style={{ fontSize: '5vh', margin: 0, textAlign: 'left' }}>
          Defining a Component in React
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '4vh', marginTop: '3vh', textAlign: 'left' }}>
          Function component
          </Text>
          <CodePane source={sources.functionComponent} style={{ maxHeight: '93vh', overflowY: 'auto' }} lang="jsx" theme="light" />
          <Text textColor="secondary" style={{ fontSize: '4vh', marginTop: '3vh', textAlign: 'left' }}>
          Class component
          </Text>
          <CodePane source={sources.classComponent} style={{ maxHeight: '93vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 0.5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', marginTop: '0.5vh', textAlign: 'left' }}>
          Class component can contain State
          </Text>
          <CodePane source={sources.classComponentWithState} style={{ maxHeight: '93vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 0.5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', marginTop: '0.5vh', textAlign: 'left' }}>
          setState()
          </Text>
          <CodePane source={sources.setState} style={{ maxHeight: '93vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 0.5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', marginTop: '0.5vh', textAlign: 'left' }}>
          setState()
          </Text>
          <CodePane source={sources.setState2} style={{ maxHeight: '93vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 0.5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', marginTop: '0.5vh', textAlign: 'left' }}>
          setState() based on previous state
          </Text>
          <CodePane source={sources.setState3} style={{ maxHeight: '93vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 0.5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', marginTop: '0.5vh', textAlign: 'left' }}>
          Passing props
          </Text>
          <CodePane source={sources.passingProps} style={{ maxHeight: '93vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 0.5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', marginTop: '0.5vh', textAlign: 'left' }}>
          React.Fragment
          </Text>
          <CodePane source={sources.fragment} style={{ maxHeight: '93vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 0.5vw 0">
          <Heading caps style={{ fontSize: '5vh', margin: 0, textAlign: 'left' }}>
            Typechecking
          </Heading>
          <List style={{ margin: '1vh 0 1vh 2vh' }}>
            <ListItem style={{ fontSize: '3vh', margin: '0.3vh' }}><span style={{ ...styles.brain }}>PropTypes</span> – dynamic typechecking, warns to console</ListItem>
            <ListItem style={{ fontSize: '3vh', margin: '0.3vh' }}><span style={{ ...styles.brain }}>Flow</span> – static typechecking</ListItem>
            <ListItem style={{ fontSize: '3vh', margin: '0.3vh' }}><span style={{ ...styles.brain }}>TypeScript</span> – static typechecking</ListItem>
          </List>
          <CodePane source={sources.propTypes} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 0.5vw 0">
          <CodePane source={sources.reactClassProperties} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
          <Corner right="2vw" bottom="1vh">
            <Link href="https://codesandbox.io/s/qz74mjjx6" target="_blank" style={{ fontSize: '4vh' }}>Example</Link>
          </Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding={0}>
          <Image src={images.lifecycle} />
          <Corner right="0.5vw" bottom="0.5vh">
            <Link href="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/" target="_blank" style={{ fontSize: '4vh' }}>Source</Link>
          </Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding={0}>
          <Image src={images.lifecycleExtended} />
          <Corner right="0.5vw" bottom="0.5vh">
            <Link href="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/" target="_blank" style={{ fontSize: '4vh' }}>Source</Link>
          </Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 3vw">
          <Heading style={{ fontSize: '8vh', margin: 0 }}>
            ErrorBoundary
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '4vh', marginTop: '2vh', textAlign: 'left' }}>
          As of React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree.
          </Text>
          <Text textColor="secondary" style={{ fontSize: '4vh', marginTop: '2vh', textAlign: 'left' }}>
          Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.
          </Text>
          <Text textColor="secondary" style={{ fontSize: '4vh', marginTop: '2vh', textAlign: 'left' }}>
          Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
          </Text>
          <CodePane source={sources.errorBoundaryUsage} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 0.5vw 0">
          <CodePane source={sources.errorBoundary} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 0.5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', marginTop: '0.5vh', textAlign: 'left' }}>
            Keys, conditional rendering
          </Text>
          <CodePane source={sources.keys} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 0.5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', marginTop: '0.5vh', textAlign: 'left' }}>
            PureComponent
          </Text>
          <CodePane source={sources.pureComponent} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 5vw">
          <Heading style={{ fontSize: '8vh', margin: 0 }}>
            Reusing Logic
          </Heading>
          <List>
            <ListItem style={{ fontSize: '6vh' }}>Higher Order Components</ListItem>
            <ListItem style={{ fontSize: '6vh' }}>Render Props</ListItem>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 0.5vw">
          <Text textColor="secondary" style={{ fontSize: '3.5vh', marginTop: '2vh', textAlign: 'left' }}>
            Higher Order Component: a function that takes a component and returns a component
          </Text>
          <CodePane source={sources.hoc} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 0.5vw">
          <Text textColor="secondary" style={{ fontSize: '3.5vh', marginTop: '2vh', textAlign: 'left' }}>
            Higher Order Component: lifecycle
          </Text>
          <CodePane source={sources.hocLifecycle} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 0.5vw">
          <Text textColor="secondary" style={{ fontSize: '3.5vh', marginTop: '2vh', textAlign: 'left' }}>
            Render Props
          </Text>
          <CodePane source={sources.renderProps} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.chernobylBlurred} padding="0 0.5vw">
          <Text textColor="secondary" style={{ fontSize: '3.5vh', marginTop: '2vh', textAlign: 'left' }}>
            Render Props: children variation
          </Text>
          <CodePane source={sources.renderPropsChildren} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>

        {/** Hooks **/}

        <FullScreenSlide bgImage={images.hooks}>
          <Corner top="35vh" left="6.5vw">
            <Heading caps style={{ ...styles.brain3D, fontSize: '13.17vh' }}>React Hooks</Heading>
          </Corner>
        </FullScreenSlide>
        <Slide bgImage={images.hooksBlurred}>
          <Heading caps style={{ ...styles.brain }}>Motivation</Heading>
          <Appear><Heading size={4} margin="4vh 0 0 0" textColor="secondary">Why React Hooks?</Heading></Appear>
          <Appear><Heading fit margin="2vh 0 0 0" textColor="secondary">What problems are we trying to solve?</Heading></Appear>
        </Slide>
        <FullScreenSlide bgImage={images.hooksBlurred} style={{ padding: '0 20vw' }}>
          <Heading caps style={{ ...styles.brain }}>Problems</Heading>
          <List>
            <Appear><ListItem textSize="7vh" bold>Reusing Logic</ListItem></Appear>
            <Appear><ListItem textSize="7vh" bold>Giant Components</ListItem></Appear>
            <Appear><ListItem textSize="7vh" bold>Confusing Classes</ListItem></Appear>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} style={{ padding: '0 20vw' }}>
          <Heading size={2} style={{ ...styles.brain }}>Reusing Logic</Heading>
          <Appear>
            <List>
              <ListItem fit bold style={{ fontSize: '5vh' }}>Higher Order Components</ListItem>
              <ListItem bold style={{ fontSize: '5vh' }}>Render Props</ListItem>
              <Text textColor="secondary" bold textSize="3.8vh" margin="6vh 0 0 0">
                Both of these patterns have a downside:<br/>
                they change the component hierarchy
              </Text>
            </List>
          </Appear>
        </FullScreenSlide>
        <Slide transition={['zoom']} bgImage={images.wrapperHell}>
          <Heading caps style={{ ...styles.brain, lineHeight: 1.2, border: `1vh solid ${theme.screen.colors.brainDark}` }}>Wrapper Hell</Heading>
        </Slide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em 0.6em 0.4em">
          <Heading size={2} style={{ ...styles.brain, lineHeight: 1.3 }}>Giant Components</Heading>
          <CodePane
            lang="jsx"
            source={sources.giantComponent}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} style={{ padding: '0 10vw' }}>
          <Heading size={2} style={{ ...styles.brain }}>Confusing Classes</Heading>
          <List margin="6vh 0 0 0">
            <Appear><ListItem fit bold style={{ fontSize: '7vh' }}>Hard for Humans</ListItem></Appear>
            <Appear><ListItem bold style={{ fontSize: '7vh' }}>Hard for Machines</ListItem></Appear>
            <Appear>
              <Text textColor="secondary" textSize="3.7vh" margin="6vh 0 0 0">
                Humans have problems with this.<br />
                Classes don't minify well because method names can't be changed.<br />
                Unused class methods are not stripped out.<br />
                Hard for compilers to optimize.
              </Text>
            </Appear>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.6em">
          <Heading caps lineHeight={1.5} >Before Hooks...</Heading>
          <Appear><Text textColor="secondary" textSize="4.5vh">You started with a <span style={{ ...styles.brain, fontWeight: 'bold' }}>Function/Dumb/Stateless</span> component</Text></Appear>
          <Appear><Text textColor="secondary" textSize="4.5vh">and then when you needed state or lifecycle</Text></Appear>
          <Appear><Text textColor="secondary" textSize="4.5vh">you re-wrote it to <span style={{ ...styles.brain, fontWeight: 'bold' }}>Class/Smart/Stateful</span> component</Text></Appear>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.6em">
          <Heading caps lineHeight={1.5} >Before Hooks...</Heading>
          <Text textColor="secondary" textSize="6vh">React didn't provide a <span style={{ ...styles.brain, fontWeight: 'bold' }}>stateful</span> primitive<br/>other than a <span style={{ ...styles.brain, fontWeight: 'bold' }}>class component</span></Text>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.6em">
          <Heading caps lineHeight={1.5} >Hooks</Heading>
          <Text textColor="secondary" textSize="6vh">Hooks let you use state<br/>and other React features<br/>without writing a class</Text>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.6em">
          <Heading caps lineHeight={1.5} >Hooks</Heading>
          <Text textColor="secondary" textSize="6vh">Hooks are functions<br/>that let you "hook into" React features<br/>from functional components</Text>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.6em">
          <Heading caps lineHeight={1.5} >Hooks</Heading>
          <Text textColor="secondary" textSize="6vh">Introduced in React v16.8.0</Text>
          <Text textColor="secondary" textSize="6vh">Supported by React Native since v0.59</Text>
        </FullScreenSlide>
        <Slide bgImage={images.hooksBlurred}>
          <Heading caps style={{ ...styles.brain }}>Basic Hooks</Heading>
          <List>
            <ListItem style={{ fontSize: '6vh' }}>useState</ListItem>
            <ListItem style={{ fontSize: '6vh' }}>useEffect</ListItem>
            <ListItem style={{ fontSize: '6vh' }}>useContext</ListItem>
          </List>
        </Slide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em 0.6em 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1.2 }}>useState</Heading>
          <CodePane
            lang="jsx"
            source={sources.useState}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
          <Text textColor="secondary" textSize="3.4vh" textAlign="left" margin="2vh 0 0 0">Returns a stateful value, and a function to update it.</Text>
          <Appear><Text textColor="secondary" textSize="3.4vh" textAlign="left" margin="2vh 0 0 0">During the initial render, the returned state (<span style={{ ...styles.brain }}>state</span>) is the same as the value passed as the first argument (<span style={{ ...styles.brain }}>initialState</span>).</Text></Appear>
          <Appear><Text textColor="secondary" textSize="3.4vh" textAlign="left" margin="2vh 0 0 0">The <span style={{ ...styles.brain }}>setState</span> function is used to update the state. It accepts a new state value and enqueues a re-render of the component.</Text></Appear>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useState</Heading>
          <Text textColor="secondary" textSize="3.4vh" textAlign="left" margin="2vh 0 0 0">
            Functional updates:
          </Text>
          <CodePane
            lang="jsx"
            source={sources.useStateFunctionalUpdates}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
          <Text textColor="secondary" textSize="3.4vh" textAlign="left" margin="2vh 0 6vh">
            If the new state is computed using the previous state, you can pass a function to setState. The function will receive the previous value, and return an updated value.
          </Text>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useState</Heading>
          <Text textColor="secondary" textSize="3.4vh" textAlign="left" margin="2vh 0 0 0">
            Lazy initial state:
          </Text>
          <CodePane
            lang="jsx"
            source={sources.useStateLazyInitialState}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
          <Text textColor="secondary" textSize="3.4vh" textAlign="left" margin="2vh 0 0 0">
            If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render
          </Text>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useEffect</Heading>
          <Text textColor="secondary" textSize="3.4vh" textAlign="left" margin="2vh 0 0 0">
            Conditionally firing an effect:
          </Text>
          <CodePane
            lang="jsx"
            source={sources.useEffectConditional}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
          <Text textColor="secondary" textSize="3.4vh" textAlign="left" margin="2vh 0 0 0">
            Firing an effect on mount:
          </Text>
          <CodePane
            lang="jsx"
            source={sources.useEffectOnMount}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useEffect</Heading>
          <Text textColor="secondary" textSize="3.4vh" textAlign="left" margin="2vh 0 0 0">
            Cleaning up an effect:
          </Text>
          <CodePane
            lang="jsx"
            source={sources.useEffectCleanup}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
          <Text textColor="secondary" textSize="3.4vh" textAlign="left" margin="2vh 0 0 0">
          Often, effects create resources that need to be cleaned up before the component leaves the screen, such as a subscription or timer ID. To do this, the function passed to useEffect may return a clean-up function.
          </Text>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useContext</Heading>
          <CodePane
            lang="jsx"
            source={sources.useContext}
            theme="light"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          />
          <Text textColor="secondary" textSize="3.4vh" textAlign="left" margin="2vh 0 0 0">
            Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. 
          </Text>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 2vw">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>Rules of Hooks</Heading>
          <List>
            <ListItem style={{ fontSize: '5vh' }}>Only Call Hooks at the Top Level</ListItem>
            <ListItem style={{ fontSize: '5vh' }}>Only Call Hooks from React Functions</ListItem>
          </List>
          <Text textColor="secondary" textSize="3.4vh" textAlign="left" margin="2vh 0 0 0">
            Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function.
          </Text>
          <Text textColor="secondary" textSize="3.4vh" textAlign="left" margin="2vh 0 0 0">
            Don’t call Hooks from regular JavaScript functions. Only from function components or custom hooks.
          </Text>
          <Text textColor="secondary" textSize="3.4vh" textAlign="left" margin="2vh 0 0 0">
            ESLint plugin enforcing the rules: <Link href="https://www.npmjs.com/package/eslint-plugin-react-hooks" target="_blank">eslint-plugin-react-hooks</Link>
          </Text>
        </FullScreenSlide>
        <Slide bgImage={images.hooksBlurred}>
          <Heading size={3} caps style={{ ...styles.brain }}>Additional Hooks</Heading>
          <List>
            <ListItem style={{ fontSize: '5vh' }}>useReducer</ListItem>
            <ListItem style={{ fontSize: '5vh' }}>useCallback</ListItem>
            <ListItem style={{ fontSize: '5vh' }}>useMemo</ListItem>
            <ListItem style={{ fontSize: '5vh' }}>useRef</ListItem>
            <ListItem style={{ fontSize: '5vh' }}>useImperativeHandle</ListItem>
            <ListItem style={{ fontSize: '5vh' }}>useLayoutEffect</ListItem>
            <ListItem style={{ fontSize: '5vh' }}>useDebugValue</ListItem>
          </List>
        </Slide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useReducer</Heading>
          <Text textColor="secondary" textSize="5vh" textAlign="left" margin="2vh 0 0 0">
            Passing the initial state:
          </Text>
          <CodePane source={sources.useReducer} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Text textColor="secondary" textSize="4vh" textAlign="left" margin="4vh 0 0 0">
            Lazy initialization:
          </Text>
          <CodePane source={sources.useReducerInit} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useCallback</Heading>
          <CodePane source={sources.useCallback} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Text textColor="secondary" textSize="4vh" textAlign="left" margin="4vh 0 0 0">
            Returns a memoized callback.
          </Text>
          <Heading size={3} style={{ ...styles.brain, lineHeight: 1 }}>useMemo</Heading>
          <CodePane source={sources.useMemo} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
          <Text textColor="secondary" textSize="4vh" textAlign="left" margin="4vh 0 0 0">
            Returns a memoized value.
          </Text>
        </FullScreenSlide>
        <Slide bgImage={images.hooksBlurred}>
          <Heading size={3} caps style={{ ...styles.brain }}>Custom Hooks</Heading>
          <Text textColor="secondary" textSize="4vh" textAlign="left" margin="4vh 0 0 0">
            Custom Hooks lets you extract component logic into reusable functions.
          </Text>
          <Text textColor="secondary" textSize="4vh" textAlign="left" margin="4vh 0 0 0">
            A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.
          </Text>
        </Slide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain }}>Custom Hook</Heading>
          <CodePane source={sources.customHook} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain }}>Custom useFormInput</Heading>
          <CodePane source={sources.customUseFormInput} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain }}>Custom useDocumentTitle</Heading>
          <CodePane source={sources.customUseDocumentTitle} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
        </FullScreenSlide>
        <FullScreenSlide style={{ padding: '5vw' }}>
          <BlockQuote>
            <Quote textColor="secondary" style={{ fontSize: '3.6vh', lineHeight: 1.2, borderColor: theme.screen.colors.secondary }}>
              With hooks we separate code not based on the lifecycle method name but based on what the code is doing
            </Quote>
            <Cite margin="10px 0 0 30px">Dan @ React Conf 2018</Cite>
          </BlockQuote>
        </FullScreenSlide>
        <FullScreenVideo name="separationOfConcerns" format="mp4" loop />

        {/* End of episode 1 */}
        <FullScreenSlide bgImage={images.chernobyl}>
          <div>
            <img src={images.react} style={{ height: '60vh' }} />
            <Heading caps style={{ ...styles.brain, fontSize: '5.1vh' }}>To Be Continued...</Heading>
          </div>
        </FullScreenSlide>

        {/** Episode 2: Redux, Router, Redux **/}

        {/* Talk: how to sync state between two components, reminder of lifting state up, lift up to the main component - enough for global state? */}
        <FullScreenSlide bgImage={images.chernobylBlurred} padding={0}>
          <Text textColor="secondary" style={{ fontSize: '4.5vh', margin: '5vh', }}>
            How do we synchronize states of the two sibling components?
          </Text>
          <Image src={images.syncState} />
        </FullScreenSlide>

        {/** Redux **/}

        <FullScreenSlide bgImage={images.collider}>
          <Corner bottom="33vh" right="18.9vw">
            <Heading caps style={{ ...styles.brain3D, fontSize: '14.63vh' }}>Redux</Heading>
          </Corner>
        </FullScreenSlide>
        <Slide bgColor="secondary">
          <Image src={images.fbCounterIssue} />
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.fbCounterIssueTeam} />
        </Slide>
        <FullScreenSlide bgColor="secondary">
          <Text caps textColor="cartoon" style={{ fontSize: '7vh', fontWeight: 'bold', margin: '5vh 0 2vh 0', textAlign: 'center' }}>
            MVC doesn't scale well
          </Text>
          <Image src={images.mvc} />
          {/*
            Connections between Models and Views are bidirectional causing the following:
              - it’s hard to track down cyclic dependencies
              - cascading data updates are hard to follow
              - code is imperative, data flows are hard to reason about
              - system is fragile, adding new features is dangerous
              - bugs are hard to track down
          */}
        </FullScreenSlide>
        <Slide bgColor="secondary">
          <Text caps textColor="cartoon" style={{ fontSize: '7vh', fontWeight: 'bold', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            Flux
          </Text>
          <Image src={images.flux} />
        </Slide>
        <Slide bgColor="secondary">
          <Text caps textColor="cartoon" style={{ fontSize: '7vh', fontWeight: 'bold', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            Redux
          </Text>
          <Image src={images.redux} />
          {/* Flux:							                              Redux:
              - Singleton Dispatcher		                      - No Dispatcher, store.dispatch() method
              - Multiple Stores					                      - Single Store
              - Mutable State					                        - Immutable State
              - Store callbacks registered with Dispatcher		- Reducers, pure functions
              - Store getter methods				                  - Selectors */}
        </Slide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 7vw">
          <Heading style={{ fontSize: '8vh', margin: 0 }}>
            Three Principles of Redux
          </Heading>
          <List>
            <ListItem style={{ fontSize: '6vh' }}>Single source of truth</ListItem>
            <ListItem style={{ fontSize: '6vh' }}>State is read-only</ListItem>
            <ListItem style={{ fontSize: '6vh' }}>Changes are made with pure functions</ListItem>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading caps style={{ fontSize: '5vh', margin: 0, textAlign: 'left' }}>
            Single source of truth
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '3.8vh', marginTop: '2vh', textAlign: 'left' }}>
            The state of your whole application is stored in an object tree within a single store
          </Text>
          <CodePane source={sources.reduxPrinciples1} style={{ maxHeight: '75vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading caps style={{ fontSize: '5vh', margin: 0, textAlign: 'left' }}>
            State is read-only
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '3.8vh', marginTop: '2vh', textAlign: 'left' }}>
            The only way to change the state is to emit an action, an object describing what happened
          </Text>
          <CodePane source={sources.reduxPrinciples2} style={{ maxHeight: '75vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading caps style={{ fontSize: '5vh', margin: 0, textAlign: 'left' }}>
            Changes are made with pure functions
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '3.8vh', marginTop: '2vh', textAlign: 'left' }}>
            To specify how the state tree is transformed by actions, you write pure reducers
          </Text>
          <CodePane source={sources.reduxPrinciples3} style={{ maxHeight: '75vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <CodePane source={sources.reduxPrinciples31} style={{ maxHeight: '90vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading style={{ fontSize: '5vh', margin: '0 0 2vh', textAlign: 'left' }}>
            combineReducers, createStore
          </Heading>
          <CodePane source={sources.combineReducers} style={{ maxHeight: '99vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading style={{ fontSize: '5vh', margin: '0 0 2vh', textAlign: 'left' }}>
            Action creators
          </Heading>
          <CodePane source={sources.actionCreators} style={{ maxHeight: '99vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading style={{ fontSize: '5vh', margin: '0 0 2vh', textAlign: 'left' }}>
            createStore, applyMiddleware
          </Heading>
          <CodePane source={sources.createStore} style={{ maxHeight: '99vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading style={{ fontSize: '5vh', margin: '0 0 2vh', textAlign: 'left' }}>
            Async actions: Redux Thunk
          </Heading>
          <CodePane source={sources.reduxThunk} style={{ maxHeight: '99vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <CodePane source={sources.reduxThunk2} style={{ maxHeight: '99vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <CodePane source={sources.reduxThunk3} style={{ maxHeight: '99vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading style={{ fontSize: '5vh', margin: '0 0 2vh', textAlign: 'left' }}>
            Redux Thunk source code
          </Heading>
          <CodePane source={sources.reduxThunkSource} style={{ maxHeight: '99vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide>
          <BlockQuote>
            <Quote textColor="secondary" style={{ marginBottom: '3vh', fontSize: '3.8vh', lineHeight: 1.2, borderColor: theme.screen.colors.secondary }}>
            Isolation of effects is why I prefer redux-saga over thunks
            </Quote>
            <Quote textColor="secondary" style={{ fontSize: '3.8vh', lineHeight: 1.2, borderColor: theme.screen.colors.secondary }}>
            Switch to redux-saga<br/>Keep side-effects isolated from your reducers and action creators
            </Quote>
            <Cite margin="10px 0 0 30px">Eric Elliot</Cite>
          </BlockQuote>
          <Corner right="2vw" bottom="2vh">
            <Link href="https://medium.com/javascript-scene/do-react-hooks-replace-redux-210bab340672#a971" target="_blank" style={{ fontSize: '4vh' }}>Proof</Link>, <Link href="https://medium.com/@_ericelliott/switch-to-redux-saga-keep-side-effects-isolated-from-your-reducers-and-action-creators-8bd846aa9dd1" target="_blank" style={{ fontSize: '4vh' }}>Proof</Link>
          </Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading style={{ fontSize: '5vh', margin: '0 0 2vh', textAlign: 'left' }}>
            Async actions: Redux Saga
          </Heading>
          <CodePane source={sources.reduxSaga} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <CodePane source={sources.reduxSaga2} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading style={{ fontSize: '5vh', margin: '0 0 2vh', textAlign: 'left' }}>
            Usage with React: React Redux
          </Heading>
          <CodePane source={sources.reactRedux} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <CodePane source={sources.reactRedux2} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading style={{ fontSize: '5vh', margin: '0 0 2vh', textAlign: 'left' }}>
            Computing derived data: Reselect
          </Heading>
          <CodePane source={sources.reselect} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <CodePane source={sources.reselect2} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <CodePane source={sources.reselect3} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding={0}>
          <Image src={images.reduxDevTools} />
        </FullScreenSlide>

        {/** Router **/}

        <FullScreenSlide bgImage={images.routes}>
          <Corner bottom="27vh" left="4vw">
            <Heading caps style={{ ...styles.brain3D, fontSize: '14.63vh' }}>React Router</Heading>
          </Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Heading caps style={{ fontSize: '10vh', margin: 0 }}>Concept of a Router</Heading>
          <Appear>
            <Text textColor="secondary" style={{ fontSize: '6vh', marginTop: '5vh', textAlign: 'justify' }}>
              In Web Development:<br/> <span style={{ ...styles.brain }}>Routing</span> is a process of matching of a <span style={{ ...styles.brain }}>URL</span> to a <span style={{ ...styles.brain }}>View</span>.
            </Text>
          </Appear>
          <Appear>
            <Text textColor="secondary" style={{ fontSize: '6vh', marginTop: '5vh', textAlign: 'justify' }}>
              In Single Page Applications:<br/> <span style={{ ...styles.brain }}>View</span> is a set of components being rendered.<br/><span style={{ ...styles.brain }}>Router</span> dynamically loads components and changes what's displayed in the Browser as user navigates the page changing the <span style={{ ...styles.brain }}>URL</span>.
            </Text>
          </Appear>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 10vh">
          <Heading caps style={{ fontSize: '8vh', margin: 0 }}>
            Using Router allows to
          </Heading>
          <List>
            <ListItem style={{ fontSize: '6vh' }}>Keep UI in sync with the URL</ListItem>
            <ListItem style={{ fontSize: '6vh' }}>Bookmark individual SPA pages</ListItem>
            <ListItem style={{ fontSize: '6vh' }}>Use Browser history, Back/Forward buttons</ListItem>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgColor="secondary">
          <FullScreenImage src={images.routerBasics1} />
        </FullScreenSlide>
        <FullScreenSlide bgColor="secondary">
          <FullScreenImage src={images.routerBasics2} />
        </FullScreenSlide>
        <FullScreenSlide bgColor="secondary">
          <FullScreenImage src={images.routerBasics3} />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Heading caps style={{ fontSize: '10vh', margin: 0 }}>
            React Router
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '6vh', marginTop: '5vh', textAlign: 'center' }}>
            <span style={{ ...styles.brain }}>React Router</span> is an external library that manages navigation and rendering of components in React applications.
          </Text>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Heading caps style={{ fontSize: '10vh', margin: 0 }}>
            React Router <span style={{ ...styles.brain3D }}>V4+</span>
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '6vh', marginTop: '5vh', textAlign: 'center' }}>
            First thing to check when looking for a documentation, an article or a solution at StackOverflow, it that it is about React Router <span style={{ ...styles.brain }}>v4+</span>.
          </Text>
          <Text textColor="secondary" style={{ fontSize: '6vh', marginTop: '5vh', textAlign: 'center' }}>
            Virtually the entire API is <span style={{ ...styles.brain }}>Just Components<sup>TM</sup></span>.
          </Text>
          <Corner right="0.5vw" bottom="1vh"><Link href="https://reacttraining.com/react-router/core/guides/philosophy" target="_blank" style={{ fontSize: '4vh' }}>https://reacttraining.com/react-router/core/guides/philosophy</Link></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Heading style={{ fontSize: '8vh', margin: 0 }}>
            React Router Packages
          </Heading>
          <List>
            <ListItem style={{ fontSize: '5vh' }}><span style={{ ...styles.brain }}>react-router-dom</span> package, used for Web Browser</ListItem>
            <ListItem style={{ fontSize: '5vh' }}><span style={{ ...styles.brain }}>react-router-native</span> package, used for React Native</ListItem>
            <ListItem style={{ fontSize: '5vh' }}><span style={{ ...styles.brain }}>react-router</span> package, dependency of the other two</ListItem>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', marginTop: '5vh', textAlign: 'left' }}>
          React Router is not included in React by default, so you need to install it on top of React itself:
          </Text>
          <CodePane source={sources.routerInstall} style={{ maxHeight: '75vh', overflowY: 'auto' }} theme="light" />
          <Text textColor="secondary" style={{ fontSize: '5vh', marginTop: '5vh', textAlign: 'left' }}>
          It's not even included in Create React App by default:
          </Text>
          <CodePane source={sources.routerInstallCRA} style={{ maxHeight: '75vh', overflowY: 'auto' }} theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 10vh">
          <Heading caps style={{ fontSize: '8vh', margin: 0 }}>
            Basic Components
          </Heading>
          <List>
            <ListItem style={{ fontSize: '6vh' }}><span style={{ ...styles.brain }}>Router</span> components</ListItem>
            <ListItem style={{ fontSize: '6vh' }}><span style={{ ...styles.brain }}>Route matching</span> components</ListItem>
            <ListItem style={{ fontSize: '6vh' }}><span style={{ ...styles.brain }}>Navigation</span> components</ListItem>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Heading style={{ fontSize: '8vh', margin: 0 }}>
            Router Components
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            Browser related router types:
          </Text>
          <List style={{ margin: 0 }}>
            <ListItem style={{ fontSize: '4vh' }}>BrowserRouter – for modern browsers that support HTML5 History API</ListItem>
            <ListItem style={{ fontSize: '4vh' }}>HashRouter – for legacy browsers (uses window.location.hash)</ListItem>
          </List>
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            Router types not related to browsers:
          </Text>
          <List style={{ margin: 0 }}>
            <ListItem style={{ fontSize: '4vh' }}>MemoryRouter – for Testing or non-DOM envs like React-Native</ListItem>
            <ListItem style={{ fontSize: '4vh' }}>StaticRouter – for Server-Side Rendering</ListItem>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            BrowserRouter
          </Text>
          <Image src={images.browserRouter} margin="0 auto 2vh 0" />
          <CodePane source={sources.importBrowserRouter} lang="jsx" theme="light" />
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            HashRouter
          </Text>
          <Image src={images.hashRouter} margin="0 auto 2vh 0" />
          <CodePane source={sources.importHashRouter} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 5vh">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            BrowserRouter requires a default SPA route to be configured on Server. Otherwise here's what's happening:
          </Text>
          <Image src={images.browserRouterOnStatic} style={{ width: '100%' }} margin="0 auto 2vh 0" />
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            HashRouter is the fallback in case there is no control of Server side or static HTML. Like GitHub Pages. Or this presentation.
          </Text>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            Default SPA route on Express server
          </Text>
          <CodePane source={sources.defaultSPARouteExpress} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            Default SPA route on Webpack Dev Server
          </Text>
          <CodePane source={sources.defaultSPARouteDevServer} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 7vw">
          <Heading style={{ fontSize: '8vh', margin: 0 }}>
            Route Matching Components
          </Heading>
          <List>
            <ListItem style={{ fontSize: '6vh' }}>Route</ListItem>
            <ListItem style={{ fontSize: '6vh' }}>Switch</ListItem>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            Route
          </Text>
          <CodePane source={sources.route} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw">
          <CodePane source={sources.routerHelloWorld} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            Route
          </Text>
          <CodePane source={sources.routeInclusiveRouting} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            Route
          </Text>
          <CodePane source={sources.routeInclusiveRoutingUseCase} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            Switch
          </Text>
          <CodePane source={sources.switch} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 10vw">
          <Heading style={{ fontSize: '8vh', margin: 0 }}>
            Navigation Components
          </Heading>
          <List>
            <ListItem style={{ fontSize: '6vh' }}>Link</ListItem>
            <ListItem style={{ fontSize: '6vh' }}>Navlink</ListItem>
            <ListItem style={{ fontSize: '6vh' }}>Redirect</ListItem>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            Link
          </Text>
          <CodePane source={sources.link} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            NavLink
          </Text>
          <CodePane source={sources.navlink} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            Redirect
          </Text>
          <CodePane source={sources.redirect} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 2vw">
          <Heading caps style={{ fontSize: '5vh', margin: 0, textAlign: 'left' }}>
            Route render methods
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '5vh', marginTop: '2vh', textAlign: 'left' }}>
            There are 3 ways to render something with a &lt;Route&gt;:
          </Text>
          <List style={{ margin: '2vh 0 4vh' }}>
            <ListItem style={{ fontSize: '5vh' }}>&lt;Route <span style={{ ...styles.brain }}>component</span>&gt;</ListItem>
            <ListItem style={{ fontSize: '5vh' }}>&lt;Route <span style={{ ...styles.brain }}>render</span>&gt;</ListItem>
            <ListItem style={{ fontSize: '5vh' }}>&lt;Route <span style={{ ...styles.brain }}>children</span>&gt;</ListItem>
          </List>
          <Heading caps style={{ fontSize: '5vh', margin: 0, textAlign: 'left' }}>
            Route props
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '5vh', marginTop: '2vh', textAlign: 'left' }}>
            All the 3 render methods will be passed the same 3 route props:
          </Text>
          <List style={{ margin: '2vh 0' }}>
            <ListItem style={{ fontSize: '5vh' }}>match</ListItem>
            <ListItem style={{ fontSize: '5vh' }}>location</ListItem>
            <ListItem style={{ fontSize: '5vh' }}>history</ListItem>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            Match
          </Text>
          <CodePane source={sources.match} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            Location
          </Text>
          <CodePane source={sources.location} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            History
          </Text>
          <CodePane source={sources.history} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 2vw">
          <Heading style={{ fontSize: '5vh', margin: 0, textAlign: 'left' }}>
            withRouter() HOC
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '4.5vh', marginTop: '2vh', textAlign: 'left' }}>
            The match, location and history props are only available to the component immediately rendered by Route (a.k.a "<span style={{ ...styles.brain }}>route component</span>").<br/>
            In case you need to access them in a deeper level component you may either forward them down in props, or use withRouter.<br/>
            The <span style={{ ...styles.brain }}>withRouter HOC</span> will pass the closest Route's match, location, and history props to the wrapped component whenever it renders.
          </Text>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw 1vh 0.5vw">
          <CodePane source={sources.withRouter} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw 1vh 0.5vw">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            Protected Route using &lt;Route render&gt;
          </Text>
          <CodePane source={sources.routeRenderProtectedRoute} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw 1vh 0.5vw">
          <Text textColor="secondary" style={{ fontSize: '5vh', margin: '0', textAlign: 'left' }}>
            Custom match parameters
          </Text>
          <CodePane source={sources.customMatchParams} lang="jsx" theme="light" />
          <Corner right="0.5vw" bottom="0.5vh"><Link href="https://pshrmn.github.io/route-tester/" target="_blank" style={{ fontSize: '4vh' }}>https://pshrmn.github.io/route-tester</Link></Corner>
        </FullScreenSlide>

        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw 1vh 0.5vw">
          <Heading caps style={{ ...styles.brain, lineHeight: '10vh', fontSize: '8vh', margin: 0 }}>Redux Integration</Heading>
          <Text textColor="secondary" textSize="4.5vh" textAlign="left">
            <span style={{ ...styles.brain }}>Blocked Updates</span> issue happens when a <span style={{ ...styles.brain }}>connected</span> component is not a <span style={{ ...styles.brain }}>route</span> component.
            Redux implements shouldComponentUpdate and there are no props from the Router.
            The fix is withRouter:
          </Text>
          <CodePane source={sources.blockedUpdates} style={{ maxHeight: '75vh', overflowY: 'auto' }} lang="jsx" theme="light" />
          <Text textColor="secondary" style={{ fontSize: '4.5vh', marginTop: '2vh', textAlign: 'left' }}>
            <span style={{ ...styles.brain }}>Deep Integration</span> is required to:
            <ul style={{ margin: 0 }}>
              <li>Synchronize routing data with the store, access from the store</li>
              <li>Be able to navigate by dispatching actions</li>
              <li>Have support for time travel debugging for route changes</li>
            </ul>
          </Text>
          <Text textColor="secondary" style={{ fontSize: '4.5vh', marginTop: '2vh', textAlign: 'left' }}>
            React Router team does not recomment Deep Integration:
            <ul style={{ margin: 0 }}>
              <li>Routing data is already a prop of route components</li>
              <li>For async navigation you can pass history object in action payload</li>
              <li>Route changes are unlikely to matter for time travel debugging</li>
            </ul>
          </Text>
          <Corner right="0.5vw" bottom="0.5vh"><Link href="https://reacttraining.com/react-router/web/guides/redux-integration" target="_blank" style={{ fontSize: '4vh' }}>Redux Integration</Link></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw 1vh 0.5vw">
          <Heading style={{ ...styles.brain, lineHeight: '10vh', fontSize: '8vh', margin: 0 }}>Connected React Router</Heading>
          <Text textColor="secondary" textSize="4.5vh" textAlign="left">
            Synchronizes Router state with Redux store through uni-directional flow:
          </Text>
          <Text textColor="secondary" textSize="4.5vh" textAlign="left">
            history → store → router → components
          </Text>
          <div style={{ minWidth: '48.75vw', maxWidth: '48.75vw', margin: '0 0.25vw 0 0', display: 'inline-block', verticalAlign: 'top' }}>
            <CodePane
              lang="jsx"
              source={sources.connectedReactRouterState}
              theme="light"
              style={{ maxHeight: '75vh', overflowY: 'auto' }}
            />
          </div>
          <div style={{ minWidth: '48.75vw', maxWidth: '48.75vw', margin: '0 0 0 0.25vw', display: 'inline-block', verticalAlign: 'top' }}>
            <CodePane
              lang="jsx"
              source={sources.connectedReactRouterAction}
              theme="light"
              style={{ maxHeight: '75vh', overflowY: 'auto' }}
            />
          </div>
          <Corner right="0.5vw" bottom="0.5vh"><Link href="https://github.com/supasate/connected-react-router" target="_blank" style={{ fontSize: '4vh' }}>connected-react-router</Link></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw">
          <CodePane
            lang="jsx"
            source={sources.connectedReactRouter}
            theme="light"
            style={{ maxHeight: '96vh', overflowY: 'auto' }}
          />
          <Corner right="2vw" bottom="2vh"><Link href="https://codesandbox.io/s/connected-react-router-yllkz" target="_blank" style={{ fontSize: '4vh' }}>Example</Link></Corner>
        </FullScreenSlide>

        {/* Some more hooks! Maybe a captain hook here */}

        {/* Redux Killer */}
        {/* Remind them of what useReducer and useContext are, talk about pros and cons */}
        <Slide>
          <BlockQuote>
            <Quote textColor="secondary" style={{ fontSize: '5vh', lineHeight: 1.2, borderColor: theme.screen.colors.secondary }}>
              Throw this thing on context...
            </Quote>
            <Cite margin="10px 0 0 30px">Ryan Florence</Cite>
          </BlockQuote>
          <Appear><div style={{ fontSize: '4vh' }}><Corner right="2vw" bottom="2vh">useReducer + useContext = <Link href="https://codesandbox.io/s/redux-killer-c4n9b" target="_blank" style={{ fontSize: '4vh' }}>ReduxKiller</Link></Corner></div></Appear>
        </Slide>
        <Slide>
          <Image src={images.reduxKiller} />
          <Corner right="2vw" bottom="2vh"><Link href="https://medium.com/javascript-scene/do-react-hooks-replace-redux-210bab340672" target="_blank" style={{ fontSize: '4vh' }}>Do React Hooks Replace Redux?</Link></Corner>
        </Slide>

        {/* Router, Redux API Hooks */}
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain }}>React Redux API Hooks</Heading>
          <CodePane source={sources.reactReduxApiHooks} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain }}>React Router API Hooks</Heading>
          <CodePane source={sources.reactRouterApiHooks} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
        </FullScreenSlide>

        {/* Thanks */}
        <FullScreenSlide bgImage={images.chernobyl}>
          <div>
            <img src={images.react} style={{ height: '60vh' }} />
            <Heading caps style={{ ...styles.brain3D, fontSize: '21vh', lineHeight: 1.2 }}>Thanks</Heading>
            <Heading caps style={{ ...styles.brain, fontSize: '5.1vh' }}>Oleksiy <span style={styles.brain3DLight}>Лёша</span> Dubovyk</Heading>
          </div>
        </FullScreenSlide>
      </Deck>
    );
  }
}
