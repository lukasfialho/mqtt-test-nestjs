"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let RabbitService = class RabbitService {
    constructor() {
        this.client = microservices_1.ClientProxyFactory.create({
            transport: microservices_1.Transport.RMQ,
            options: {
                urls: ['amqp://127.0.0.1:5672'],
                queue: 'cats_queue',
                queueOptions: {
                    durable: true,
                },
                noAck: false
            }
        });
    }
    save(data) {
        return this.client.emit('notifications', data);
    }
    accumulate(data) {
        return this.client.send('sum', data);
    }
    store(data) {
        return this.client.send('store', data);
    }
};
RabbitService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], RabbitService);
exports.RabbitService = RabbitService;
//# sourceMappingURL=rabbit.service.js.map