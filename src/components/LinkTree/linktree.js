import React from 'react';
import Button from '../Button';
import variables from '../../variables';
import Header from '../Header';
import Particle from "../Particle";
import discord from '../../images/discord.svg'
import github from '../../images/github.svg'
import youtube from '../../images/youtube.svg'
import stack from '../../images/stack.svg'
import react from '../../images/react.svg'
import avatar from '../../Assets/avatar.png'
import { Container } from 'react-bootstrap'

function Linktree() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Header picture={avatar} title='MysteryFlask' subtitle='An Aspiring Developer' style={{ color: 'white' }} />
        <Button link='https://www.youtube.com/@JMBGamesYT?view_as=subscriber' icon={youtube} name='Youtube' backgroundColor={variables.youtubeColor} />
        <Button link='https://github.com/mysteryflask' icon={github} name='Github' backgroundColor={variables.githubColor} />
        <Button link='https://mysteryflask.vercel.app' icon={react} name='Website' backgroundColor={variables.opt2Color} />
        <Button link='https://stackoverflow.com/users/14850720/mysteryflask' icon={stack} name='Stack Overflow' backgroundColor={variables.stackColor} />
        <Button link='https://discord.com/channels/@me' icon={discord} name='Galaxy111#0001' backgroundColor={variables.discordColor} />
      </Container>
    </Container>
  );
}

export default Linktree;
