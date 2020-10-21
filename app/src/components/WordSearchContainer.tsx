import { IonSearchbar } from '@ionic/react';
import React from 'react';
import { getWords } from '../actions/words';

interface ContainerProps { }

const WordSearchContainer: React.FC<ContainerProps> = () => {

  const setSearchText = async (query: string | undefined) => {
    if (query) {
      console.log('setSearchText', query);
      const results = await getWords(query);
      console.log(results);
    }
  }

  return (
    <div>
      <IonSearchbar onIonChange={e => setSearchText(e.detail.value)}></IonSearchbar>
    </div>
  );
};

export default WordSearchContainer;
