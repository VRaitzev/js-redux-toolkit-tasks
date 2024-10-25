import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// BEGIN (write your solution here)
export const tasksApi = createApi({
    reducerPath: 'tasks',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    tagTypes: ['Task'], // Указываем тег для отслеживания задач
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/tasks',
            providesTags: ['Task'],  // Обновляет данные при изменении тега 'Task'
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: '/tasks',
                method: 'POST',
                body: task,
            }),
            invalidatesTags: ['Task'],  // Инвалидирует тег, чтобы обновить данные
        }),
        removeTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Task'],  // Инвалидирует тег, чтобы обновить данные
        })
    })
});

export const {
    useGetTasksQuery,
    useAddTaskMutation,
    useRemoveTaskMutation
} = tasksApi;

// END
