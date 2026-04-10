import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://gmanxqkmexwnfauhgnrn.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtYW54cWttZXh3bmZhdWhnbnJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4MTg3NzksImV4cCI6MjA5MTM5NDc3OX0.kWRoMcgY_TB9Cc6OvvVUPhGkqCpRnd4TlBllPieD2Vo",
        authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtYW54cWttZXh3bmZhdWhnbnJuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTgxODc3OSwiZXhwIjoyMDkxMzk0Nzc5fQ.bdE2S1_heaol6vFtQXzGnVg63s33G3t7hU7xPUaTwKs"
    }
})