import prisma from "../../lib/prisma"

type Props = {
    userID: string;
    comment: string;
    checkIn: Date;
    checkOut: Date;
}

export const SendData = (props: Props) => {
    const sendData = async () => {
        const response = await prisma.attendance.create({
            data: {
                userID: props.userID,
                comment: props.comment,
                checkIn: props.checkIn,
                checkOut: props.checkOut
            }
        })
    };

    return (
        <button onClick={sendData}>Send Data</button>
    );
}