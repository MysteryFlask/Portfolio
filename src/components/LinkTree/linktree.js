import React from 'react';
import { Container } from './styles';
import Button from '../Button';
import variables from '../../variables';
import Header from '../Header';
import Particle from "../Particle";

const discordLogo = require('../../images/discord.svg');
const githubLogo = require('../../images/github.svg');
const youtubeLogo = require('../../images/youtube.svg');
const stackLogo = require('../../images/stack.svg');
const reactLogo = require('../../images/react.svg');

export default function LinkTree() {
  return (
    <Container>
      <Particle />
      <Header picture='https://scontent.fgvr2-1.fna.fbcdn.net/v/t31.0-8/p960x960/13710496_10209793534625506_2997078028056513758_o.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_ohc=CT0MJiwW7cYAX-DuiSm&_nc_ht=scontent.fgvr2-1.fna&_nc_tp=6&oh=f10204fc396130e703c690b8be97f3c2&oe=5E94D2C2' title='Daniel Gomes Pereira' subtitle='A Brazilian Frontend Developer' />
      <Button link='https://www.youtube.com/@JMBGamesYT?view_as=subscriber' icon={youtubeLogo} name='Youtube' backgroundColor={variables.youtubeColor} />
      <Button link='https://github.com/mysteryflask' icon={githubLogo} name='Github' backgroundColor={variables.githubColor} />
      <Button link='https://mysteryflask.vercel.app' icon={reactLogo} name='Website' backgroundColor={variables.opt2Color} />
      <Button link='https://stackoverflow.com/users/14850720/mysteryflask' icon={stackLogo} name='Stack Overflow' backgroundColor={variables.stackColor} />
      <Button link='https://discord.com/channels/@me' icon={discordLogo} name='Galaxy111#0001' backgroundColor={variables.discordColor} />
    </Container>
  )
}
