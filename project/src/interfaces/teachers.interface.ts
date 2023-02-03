export interface TeacherRequestInterface {
    payload: any 
}



export interface TeacherResponseInterface {
    status_code: number,
    error_code: boolean,
    message: string,
    content: object | string | null
}