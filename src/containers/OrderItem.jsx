import React, { useState } from 'react';

import { Typography, TextField, Button, Box } from '@mui/material';

function OrderItem({ order, onUpdateOrder }) {
const [updatedOrder, setUpdatedOrder] = useState(order);

function handleChange(event) {
const { name, value } = event.target;
setUpdatedOrder(prevOrder => ({
...prevOrder,
[name]: value,
}));
}

async function handleSubmit(event) {
event.preventDefault();
await onUpdateOrder(order.id, updatedOrder);
}

return (
<Box sx={{ marginTop: 2 }}>
<Typography variant="h5">Order #{order.id}</Typography>
<Typography variant="body1">Status: {order.status}</Typography>
<Box component="form" onSubmit={handleSubmit} sx={{ marginTop: 2 }}>
<TextField
       label="Status"
       variant="outlined"
       name="status"
       value={updatedOrder.status}
       onChange={handleChange}
       fullWidth
     />
<Button
type="submit"
variant="contained"
sx={{ marginTop: 2 }}
>
Update Order
</Button>
</Box>
</Box>
);
}

export default OrderItem;
