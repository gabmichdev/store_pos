import { IsOptional, IsNotEmpty, IsISO8601, Min } from 'class-validator';

export class GetPaymentOrdersFilterDto {
	@IsOptional() name: string;

	@IsOptional() description: string;

	@IsOptional()
	@IsNotEmpty()
	@IsISO8601()
	dateStart: string;

	@IsOptional()
	@IsNotEmpty()
	@IsISO8601()
	dateEnd: string;

	@IsOptional()
	limit: number;

	@IsOptional()
	skip: number;
}
