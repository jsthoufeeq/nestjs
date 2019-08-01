import { Injectable } from '@nestjs/common';
import { Item } from './../interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {

    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}
    
    async fetchAll(): Promise<Item> {
        return await this.itemModel.find();
    }

    fetchOne(id: string): object {
        return this.itemModel.find({ _id: id})
    }

    async createOne(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }

    delete() {
        //
    }

}
