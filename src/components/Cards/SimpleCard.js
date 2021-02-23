import Button from 'reactstrap/lib/Button';
import React from 'react';
import Badge from 'reactstrap/lib/Badge';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';

function SimpleCard({ title, description, color, icon, link, badges }) {
  function returnBadges() {
    return badges?.map((badge) => (
      <Badge color={color} pill className='mr-1'>
        {badge}
      </Badge>
    ));
  }
  return (
    <Card className='card-lift--hover shadow border-0'>
      <CardBody className='py-5'>
        <div
          className={`icon icon-shape icon-shape-${color} rounded-circle mb-4`}
        >
          <i className={`ni ni-${icon}`} />
        </div>
        <h6 className={`text-${color} text-uppercase`}>{title}</h6>
        <p className='description mt-3'>{description}</p>
        <div>{returnBadges()}</div>
        <Button
          className='mt-4'
          color={color}
          href='#pablo'
          onClick={(e) => e.preventDefault()}
        >
          Learn more
        </Button>
      </CardBody>
    </Card>
  );
}

export default SimpleCard;
