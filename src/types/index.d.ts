declare global {
  namespace NodeJS {
    interface Global {
      prisma: any;
    }
  }
}

export interface BaseType {
  createdAt: Date;
  updatedAt: Date;
}

export interface PostType extends BaseType {
  id: number;
  title: string;
  content?: string;
  published: boolean;
  author: UserType;
  authorId?: number;
}

export interface UserType extends BaseType {
  id: number;
  name?: string;
  email?: string;
  posts?: PostType;
}
