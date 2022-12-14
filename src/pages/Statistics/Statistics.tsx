import CurvePreviewCard from "@common/components/CurvePreviewCard/CurvePreviewCard";
import { Grid, useMediaQuery } from "@mui/material";
import {
  Mouse as MouseIcon,
  AccessTime as AccessTimeIcon,
  Send as SendIcon,
  ScheduleSend as ScheduleSendIcon,
} from "@mui/icons-material";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { getStatistics } from "./services/statistics";
import { colors } from "@common/theme/utils/consts";
import { Link } from "react-router-dom";

const Statistics: FC = () => {
  const isLg = useMediaQuery("(min-width:1200px)");

  // const [isDrawerOpen, setIsDrawerOpen] = useState(isLg);
  const statisticsDataQuery = useQuery(["statistics"], getStatistics);

  return (
    <Grid
      container
      spacing="1rem"
      sx={{ boxSizing: "border-box", m: isLg ? "1rem auto 2rem auto" : "0", maxWidth: "lg" }}
    >
      <Grid item lg={12} sm={6} xs={12} sx={{ lg: { height: "55%" }, xs: { height: "45%" } }}>
        <Link to="/statistics/clicks-to-convert" style={{ textDecoration: "none" }}>
          <CurvePreviewCard
            aspectRatio={3}
            title="Clicks to convert"
            icon={<MouseIcon fontSize="large" sx={{ color: "primary.contrastText" }} />}
            data={statisticsDataQuery.data || []}
            dataKey="clicksToConvert"
            color={colors.LIGHT_BLUE}
          />
        </Link>
      </Grid>
      <Grid item lg={4} sm={6} xs={12} sx={{ lg: { height: "35%" }, xs: { height: "45%" } }}>
        <Link to="/statistics/time-to-convert" style={{ textDecoration: "none" }}>
          <CurvePreviewCard
            title="Time to convert"
            icon={<AccessTimeIcon fontSize="large" sx={{ color: "primary.contrastText" }} />}
            data={statisticsDataQuery.data || []}
            dataKey="timeToConvert"
            color={colors.PASTEL_GREEN}
          />
        </Link>
      </Grid>
      <Grid item lg={4} sm={6} xs={12} sx={{ lg: { height: "35%" }, xs: { height: "45%" } }}>
        <Link to="/statistics/clicks-to-share" style={{ textDecoration: "none" }}>
          <CurvePreviewCard
            title="Clicks to share"
            icon={<SendIcon fontSize="large" sx={{ color: "primary.contrastText" }} />}
            data={statisticsDataQuery.data || []}
            dataKey={"clicksToShare"}
            color={colors.PASTEL_PURPLE}
          />
        </Link>
      </Grid>
      <Grid item lg={4} sm={6} xs={12} sx={{ lg: { height: "35%" }, xs: { height: "45%" } }}>
        <Link to="/statistics/time-to-share" style={{ textDecoration: "none" }}>
          <CurvePreviewCard
            title="Time to share"
            icon={<ScheduleSendIcon fontSize="large" sx={{ color: "primary.contrastText" }} />}
            data={statisticsDataQuery.data || []}
            dataKey="timeToShare"
            color={colors.VIBRANT_RED}
          />
        </Link>
      </Grid>
    </Grid>
  );
};

export default Statistics;
