import React from 'react';

import Name from '../../objects/Name';
import Price from '../../objects/Price';
import Description from '../../objects/Description';

import ButtonCollab from '../ButtonCollab';

import Card from './styles';

const CardCollab = props => (
  <Card>
    <Name>{props.name}</Name>
    <Price>
      ${props.price}
      <small>Per agent / mo</small>
    </Price>
    <Description>{props.description}</Description>
    <ButtonCollab primary>{props.btnName}</ButtonCollab>
  </Card>
)

export default CardCollab;
