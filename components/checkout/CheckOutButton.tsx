`use client`;
import prisma from '../../lib/prisma';

type Props = {
  userID: string;
  setState: (state: Date) => void;
}

export const CheckOutButton = (props: Props) => {
    const handleCheckOut = async () => {
        const response = await prisma.user.findUnique(
            {
                where: {
                    id: props.userID
                }
            }
        )
        let checkInTime = new Date();
        if (!response.working) {
            throw new Error('すでに退勤しています。');
        } else {
            checkInTime = response.updatedAt;
            props.setState(checkInTime);
            await prisma.user.update({
                where: {
                    id: props.userID
                },
                data: {
                    working: false
                }
            })
        }
    }

    return (
        <div>
            <button onClick={handleCheckOut}>退勤する</button>
        </div>
    )
}

