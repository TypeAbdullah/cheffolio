import { CollapsibleList } from '@/components/cheffolio/collapsible-list';
import { DecorIcon } from '@/components/cheffolio/decor-icon';
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from '@/components/cheffolio/panel';
import { PROJECTS } from '@/features/portfolio/data/projects';

import { ProjectItem } from './project-item';

export function Projects() {
  return (
    <Panel
      id="projects"
      className="screen-line-bottom-none screen-line-top-none"
    >
      <PanelHeader>
        <PanelTitle>
          Projects
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="relative p-px">
        <DecorIcon className="size-4" position="top-left" />
        <DecorIcon className="size-4" position="top-right" />
        <DecorIcon className="size-4" position="bottom-left" />
        <DecorIcon className="size-4" position="bottom-right" />
        <CollapsibleList
          items={PROJECTS}
          max={3}
          triggerClassName="mt-2"
          keyExtractor={(item) => item.id}
          renderItem={(item) => <ProjectItem project={item} />}
        />
      </PanelContent>
    </Panel>
  );
}
