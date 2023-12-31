import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InitTransactionDto, InputExecuteTransactionDto } from './order.dto';
import { OrdersService } from './orders.service';

@Controller('api/orders/:wallet_id/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  all(@Param('wallet_id') wallet_id: string) {
    return this.ordersService.all({ wallet_id });
  }

  @Post()
  initTransactionDto(
    @Param('wallet_id') wallet_id: string,
    @Body() body: Omit<InitTransactionDto, 'wallet_id'>,
  ) {
    return this.ordersService.initTransaction({
      ...body,
      wallet_id,
    });
  }

  @Post('execute')
  executeTransactionRest(
    @Param('wallet_id') wallet_id: string,
    @Body() body: InputExecuteTransactionDto,
  ) {
    return this.ordersService.executeTransaction(body);
  }
}
