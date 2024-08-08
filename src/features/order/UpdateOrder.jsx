import React from 'react';
import Button from '../../ui/Button';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH">
      <Button type="primary">make priorty</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const order = { priority: true };

  await updateOrder(params.orderId, order);

  return null;
}

export default UpdateOrder;
