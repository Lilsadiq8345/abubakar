# Backend Setup (Neon Database)

To make everything work perfectly, you need to:

1.  **Create a Neon Project**: Go to [neon.tech](https://neon.tech) and create a new project.
2.  **Get Connection String**: Copy your database connection string and add it to a `.env.local` file:
    ```env
    DATABASE_URL=postgresql://[user]:[password]@[host]/[database]?sslmode=require
    ```
3.  **Create Table**: Run the following SQL in the Neon Console (SQL Editor):
    ```sql
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    ```

The application will now automatically store all contact form submissions in your Neon database.
