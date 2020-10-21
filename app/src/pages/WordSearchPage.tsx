import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import WordSearchContainer from '../components/WordSearchContainer';

const WordSearchPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Word App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <WordSearchContainer />
      </IonContent>
    </IonPage>
  );
};

export default WordSearchPage;
