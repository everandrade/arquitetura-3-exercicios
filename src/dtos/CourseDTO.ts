import { BadRequestError } from "../errors/BadRequestError"
import { CourseInputDTO, CourseOutputDTO, EditCourseInputDTO } from "../interfaces/types"
import { Course } from "../models/Course"
import { EditCourseOutputDTO } from "../interfaces/types"

export class CourseDTO {
    public createCourseInputDTO(
        id: unknown,
        name: unknown,
        lessons: unknown): CourseInputDTO {
        if (typeof id !== "string") {
            throw new BadRequestError("'id' deve ser string")
        }

        if (typeof name !== "string") {
            throw new BadRequestError("'name' deve ser string")
        }

        if (typeof lessons !== "number") {
            throw new BadRequestError("'lessons' deve ser number")
        }

        const dto: CourseInputDTO = {
            id,
            name,
            lessons
        }
        return dto
    }

    public createCourseOutputDTO(parameter: Course): CourseOutputDTO {
        const dto: CourseOutputDTO = {
            message: "Curso registrado com sucesso",
            course: {
                id: parameter.getId(),
                name: parameter.getName(),
                lessons: parameter.getLessons()
            }
        }
        return dto
    }

    public editCourseInputDTO(idToEdit: string, newId: unknown, newName: unknown, newLessons: unknown): EditCourseInputDTO {
        if (newId !== undefined) {
            if (typeof newId !== "string") {
                throw new BadRequestError("'id' deve ser string")
            }
        }

        if (newName !== undefined) {
            if (typeof newName !== "string") {
                throw new BadRequestError("'name' deve ser string")
            }
        }

        if (newLessons !== undefined) {
            if (typeof newLessons !== "number") {
                throw new BadRequestError("'lessons' deve ser number")
            }
        }

        const dto: EditCourseInputDTO = {
            idToEdit,
            newId,
            newName,
            newLessons
        }
        return dto
    }

    public editCourseOutputDTO(parameter: Course): EditCourseOutputDTO {
        const dto: EditCourseOutputDTO = {
            message: "Curso editado com sucesso",
            course: {
                id: parameter.getId(),
                name: parameter.getName(),
                lessons: parameter.getLessons()
            }
        }
        return dto
    }
}