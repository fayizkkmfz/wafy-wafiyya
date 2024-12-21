import React from "react";

import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

interface FeedbackCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function FeedbackCard({ img, client, title }: FeedbackCardProps) {
  return (
    <Card shadow={false} className="items-center text-center">
      <CardBody>
        <Avatar src={img} className="mb-2 text-center" alt={client} size="xxl" />
        <Typography variant="h3" color="blue-gray" className="font-mirza-bold text-center">
          {client}
        </Typography>
        <Typography
          variant="small"
          color="blue-gray"
          className="mt-1 mb-5 block font-normal text-xl font-mirza-regular text-center"
        >
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
}
export default FeedbackCard;