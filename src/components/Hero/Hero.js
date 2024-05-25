import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Hello ! I am Saif <br />
          Welcome to My Portfolio
        </SectionTitle>
        <SectionText>
        I'm a Final year student at KMCLU, Lucknow, studying Computer Science & Engineering. I love solving problems, and right now I'm diving into MERN. I'm also keen on developing web applications and always eager to learn new things in this field.".
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;