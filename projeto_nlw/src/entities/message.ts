
import { Entity, PrimaryColumn, CreateDateColumn, Column, ManyToOne, JoinColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { user } from "./user";

@Entity("messages")
class message {

    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    text: string;

    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => user)
    User: user;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { message }