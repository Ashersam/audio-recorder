import React from 'react';
import StoreContextProvider from './context/StoreContext';
import Recorder from './components/Recorder';
import BottomBar from './components/BottomBar';
import VerseGrid from './components/VerseGrid';
import TexttoSpeech from './components/TexttoSpeech';
// import Player from './components/AudioPlayer';
// import ExportWebm from './core/ExportWebm';


const App = () => {
    return (
        <div>
            <StoreContextProvider>
                <Recorder />
                <BottomBar />
                <VerseGrid />
                <TexttoSpeech />
                {/* <Player /> */}
            </StoreContextProvider>
        </div>
    );
}

export default App;