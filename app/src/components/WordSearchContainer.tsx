import { IonItem, IonLabel, IonList, IonSearchbar } from '@ionic/react';
import React, { useState } from 'react';
import { getWords, Word } from '../actions/words';

interface ContainerProps { }

const WordSearchContainer: React.FC<ContainerProps> = () => {
  const [words, setWords] = useState<Word[]>([]);

  const setSearchText = async (query: string | undefined) => {
    if (query) {
      const results: any = await getWords(query);
      setWords(results);
    }
  }

  return (
    <div>
      <IonSearchbar onIonChange={e => setSearchText(e.detail.value)} debounce={500}></IonSearchbar>
      <IonList>
        {words && words.map((word, idx) => (
          <IonItem key={idx}>
            <IonLabel>
              <h1>{word.value}</h1>
              <div>{word.definition}</div>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

export default WordSearchContainer;
