import React from 'react';
import { DiFirebase, DiLinux, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id='Tech'>
      <SectionDivider/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with range of Technologies including backend and frontend
      </SectionText>
      <List>
        <ListItem>
          <DiReact size={'3rem'}/>
          <ListContainer>
            <ListTitle>Front-end</ListTitle>
            <ListParagraph>
              Experience with <br/> React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size={'3rem'}/>
          <ListContainer>
            <ListTitle>Backend-end</ListTitle>
            <ListParagraph>
              Experience with <br/> Node and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiLinux size={'3rem'}/>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br/> figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
 </Section>
);

export default Technologies;
