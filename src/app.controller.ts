/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Post, Put, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './models/Products';
import { Repository } from 'typeorm';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(Products)
    private productsRepository: Repository<Products>
  ) {}

  @Get("/product")
  @HttpCode(200)
  async getProducts(@Query('productId') productId: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return await this.productsRepository.findOne({ where: {id: parseInt(productId) } });
  }

  @Post("/product")
  @HttpCode(201)
  async createProducts(@Body() postData: {
    nome_do_produto: string,
    fornecedor: string,
    endereco_fornecedor: string,
    quantidade: number,
    descricao: string,
  }) {
    const {nome_do_produto, fornecedor, endereco_fornecedor, quantidade, descricao} = postData
    return await this.productsRepository.save(postData)
  }

  @Put("/product")
  async updateProducts(@Query('productId') productId: string, @Body() putData: {
    nome_do_produto: string,
    fornecedor: string,
    endereco_fornecedor: string,
    quantidade: number,
    descricao: string,
  }) {
    
    const product = await this.productsRepository.findOne({
      where: {
        id: parseInt(productId)
      }
    })
    const {nome_do_produto, fornecedor, endereco_fornecedor, quantidade, descricao} = putData

    product.nome_do_produto = nome_do_produto
    product.fornecedor = fornecedor
    product.endereco_fornecedor = endereco_fornecedor
    product.quantidade = quantidade
    product.descricao = nome_do_produto
    
    return await this.productsRepository.update(productId, putData)
  }

  @Delete("/product") 
  async deleteProduct(@Query('productId') productId: string,) {
    return await this.productsRepository.delete(parseInt(productId));
  }

}
