import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  getCategories() {
    return { success: true, list : ['mobiles', 'laptop', 'tablet'] };
  }
}
