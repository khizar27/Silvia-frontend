import { ChooseBusinessObjective, CreateAd, ReviewsSuggestion, RunCampaign, SelectBusinessStatus } from "@/pages/dashboard/createdAt/index";


const icon = {
    className: "w-5 h-5 text-inherit",
};

export const routes = [

            {
                label: "ChooseBusinessObjective",
                value: 0,
                element: <ChooseBusinessObjective />,
            },
            {
                label: "SelectBusinessStatus",
                value: 1,
                element: <SelectBusinessStatus />,
            },
            {
                label: "ReviewsSuggestion",
                value: 2,
                element: <ReviewsSuggestion />,
            },
            {
                label: "CreateAd",
                value: 3,
                element: <CreateAd />,
            },
            {
                label: "RunCampaign",
                value: 4,
                element: <RunCampaign />,
            },

]
export default routes;