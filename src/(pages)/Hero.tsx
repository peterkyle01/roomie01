import RoomCard from "../(comps)/RoomCard";
import { ScrollArea } from "../@/components/ui/scroll-area";
import { useQuery } from "@tanstack/react-query";
import { RoomType } from "../../types";
import axios from "axios";
import { useData } from "../(hooks)/useData";
import { useSearchValue } from "../(hooks)/useSearchValue";

export default function Hero() {
	const { setRooms, filteredRooms, rooms } = useData();
	const { value } = useSearchValue();
	useQuery({
		queryKey: ["getRoomsKey"],
		queryFn: async (): Promise<RoomType[]> => {
			const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/room`);
			setRooms(data);
			return data;
		},
	});

	return (
		<div className="w-full h-full flex flex-col p-0.5">
			<h1 className="flex justify-center items-center font-black">
				Currently Available Rooms
			</h1>
			<ScrollArea className="w-full">
				<div className="w-full h-auto grid grid-cols-2 sm:grid-cols-3 gap-1 lg:grid-cols-4">
					{value.length >= 1
						? filteredRooms?.map((room) => (
								<RoomCard
									{...room}
									key={`${room.id}`}
								/>
						  ))
						: rooms?.map((room) => (
								<RoomCard
									{...room}
									key={`${room.id}`}
								/>
						  ))}
				</div>
			</ScrollArea>
		</div>
	);
}
