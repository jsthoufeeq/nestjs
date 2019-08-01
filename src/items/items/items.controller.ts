import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ItemDto } from './../dto/item.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {

    constructor(private itemService: ItemsService) {}

    @Get()
    fetchAll() {
        return this.itemService.fetchAll();
    }

    @Get(':id')
    fetchOne(@Param('id') id: string) {
        return this.itemService.fetchOne(id);
    }

    @Post()
    createOne(@Body() createDto: ItemDto) {
        return this.itemService.createOne(createDto);
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() updateDto: ItemDto): string {
        return `item name is ${updateDto.name} and item qty is ${updateDto.qty}`;
    }

    @Delete()
    deleteOne(): string {
        return 'item deleted';
    }
}
