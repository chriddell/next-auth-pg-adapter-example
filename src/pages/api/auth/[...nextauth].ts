import PostgresAdapter from '@auth/pg-adapter';
import Auth from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: Number(process.env.DATABASE_PORT),
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const options = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    }),
  ],

  /**
   * The PostgresAdapter from the @auth/pg-adapter doesn't satisfy the Adapter 
   * interface from next-auth.
   */
  adapter: PostgresAdapter(pool),
};

export default Auth(options);
