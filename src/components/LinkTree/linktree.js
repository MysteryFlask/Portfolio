import React from 'react';
import { Container } from './styles';
import Button from '../Button';
import variables from '../../variables';
import Header from '../Header';
import Particle from "../Particle";
import discord from '../../images/discord.svg'
import github from '../../images/github.svg'
import youtube from '../../images/youtube.svg'
import stack from '../../images/stack.svg'
import react from '../../images/react.svg'

export default function LinkTree() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Header picture='https://scontent.fgvr2-1.fna.fbcdn.net/v/t31.0-8/p960x960/13710496_10209793534625506_2997078028056513758_o.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_ohc=CT0MJiwW7cYAX-DuiSm&_nc_ht=scontent.fgvr2-1.fna&_nc_tp=6&oh=f10204fc396130e703c690b8be97f3c2&oe=5E94D2C2' title='Daniel Gomes Pereira' subtitle='A Brazilian Frontend Developer' />
      <Button link='https://www.youtube.com/@JMBGamesYT?view_as=subscriber' icon={youtube} name='Youtube' backgroundColor={variables.youtubeColor} />
      <Button link='https://github.com/mysteryflask' icon={github} name='Github' backgroundColor={variables.githubColor} />
      <Button link='https://mysteryflask.vercel.app' icon={react} name='Website' backgroundColor={variables.opt2Color} />
      <Button link='https://stackoverflow.com/users/14850720/mysteryflask' icon={stack} name='Stack Overflow' backgroundColor={variables.stackColor} />
      <Button link='https://discord.com/channels/@me' icon={discord} name='Galaxy111#0001' backgroundColor={variables.discordColor} />
    </Container>
  )
}
