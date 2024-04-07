import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          welcome to <br/> My Peronal Portfolio
        </SectionTitle>
        <SectionText>
          the purpose:
        </SectionText>
        <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;